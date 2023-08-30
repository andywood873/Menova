import React, { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { ChainId } from '@biconomy/core-types';
import { IBundler, Bundler } from '@biconomy/bundler';
import {
  BiconomySmartAccount,
  BiconomySmartAccountConfig,
  DEFAULT_ENTRYPOINT_ADDRESS,
} from '@biconomy/account';
import { IPaymaster, BiconomyPaymaster } from '@biconomy/paymaster';
import { ParticleAuthModule, ParticleProvider } from '@biconomy/particle-auth';

const AuthContext = createContext();

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [sticky, setSticky] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [smartAccount, setSmartAccount] = useState(null);
  const [provider, setProvider] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedAddress = localStorage.getItem('address');
    if (savedAddress) {
      setAddress(savedAddress);
      // Note: If you have other state variables or settings that depend on this address,
      //       make sure to set those here as well
    }
  }, []);

  const POLYGON_MUMBAI = 80001;

  const particle = new ParticleAuthModule.ParticleNetwork({
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY,
    appId: process.env.NEXT_PUBLIC_APP_ID,

    wallet: {
      displayWalletEntry: true,
      defaultWalletEntryPosition: ParticleAuthModule.WalletEntryPosition.BR,
    },
  });

  const connectWallet = async () => {
    try {
      const userInfo = await particle.auth.login();
      console.log('Logged in user:', userInfo);
      const particleProvider = new ParticleProvider(particle.auth);
      console.log({ particleProvider });
      const web3Provider = new ethers.providers.Web3Provider(
        particleProvider,
        'any'
      );
      setProvider(web3Provider);
      const biconomySmartAccountConfig = {
        signer: web3Provider.getSigner(),
        chainId: ChainId.POLYGON_MUMBAI,
        bundler: bundler,
        paymaster: paymaster,
      };
      let biconomySmartAccount = new BiconomySmartAccount(
        biconomySmartAccountConfig
      );
      biconomySmartAccount = await biconomySmartAccount.init();
      const retrievedAddress =
        await biconomySmartAccount.getSmartAccountAddress();
      setAddress(retrievedAddress);

      // Save the address to local storage for persistence
      localStorage.setItem('address', retrievedAddress);
      setSmartAccount(biconomySmartAccount);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!address) {
      // Remove from local storage when signed out
      localStorage.removeItem('address');
    }
  }, [address]);

  const bundler = new Bundler({
    bundlerUrl: `https://bundler.biconomy.io/api/v2/${80001}/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44`,
    chainId: ChainId.POLYGON_MUMBAI,
    entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
  });

  const paymaster = new BiconomyPaymaster({
    paymasterUrl:
      'https://paymaster.biconomy.io/api/v1/80001/DpjwYtOnh.f88982aa-afc5-432b-80a9-14794fc54b9b',
  });

  const contextValue = {
    sticky,
    setSticky,
    openModal,
    setOpenModal,
    address,
    loading,
    smartAccount,
    provider,
    connectWallet,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

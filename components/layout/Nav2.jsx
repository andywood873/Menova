import React, { useState } from 'react';
import { SiBlockchaindotcom } from 'react-icons/si';
import Link from 'next/link';
import ChooseCreate from '../modal/ChooseCreate';
import { ParticleAuthModule, ParticleProvider } from '@biconomy/particle-auth';
import { IBundler, Bundler } from '@biconomy/bundler';
import {
  BiconomySmartAccount,
  BiconomySmartAccountConfig,
  DEFAULT_ENTRYPOINT_ADDRESS,
} from '@biconomy/account';
import { ethers } from 'ethers';
import { ChainId } from '@biconomy/core-types';
import { IPaymaster, BiconomyPaymaster } from '@biconomy/paymaster';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAuthContext } from '@/context/AuthContext';

const Nav2 = () => {
  const [sticky, setSticky] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const { connectWallet, address, loading } = useAuthContext();

  // const [address, setAddress] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [smartAccount, setSmartAccount] = useState(null);
  // const [provider, setProvider] = useState(null);

  // const POLYGON_MUMBAI = 80001;

  // const particle = new ParticleAuthModule.ParticleNetwork({
  //   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  //   clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY,
  //   appId: process.env.NEXT_PUBLIC_APP_ID,

  //   wallet: {
  //     displayWalletEntry: true,
  //     defaultWalletEntryPosition: ParticleAuthModule.WalletEntryPosition.BR,
  //   },
  // });

  // const connectWallet = async () => {
  //   try {
  //     const userInfo = await particle.auth.login();
  //     console.log('Logged in user:', userInfo);
  //     const particleProvider = new ParticleProvider(particle.auth);
  //     console.log({ particleProvider });
  //     const web3Provider = new ethers.providers.Web3Provider(
  //       particleProvider,
  //       'any'
  //     );
  //     setProvider(web3Provider);
  //     const biconomySmartAccountConfig = {
  //       signer: web3Provider.getSigner(),
  //       chainId: ChainId.POLYGON_MUMBAI,
  //       bundler: bundler,
  //       paymaster: paymaster,
  //     };
  //     let biconomySmartAccount = new BiconomySmartAccount(
  //       biconomySmartAccountConfig
  //     );
  //     biconomySmartAccount = await biconomySmartAccount.init();
  //     setAddress(await biconomySmartAccount.getSmartAccountAddress());
  //     setSmartAccount(biconomySmartAccount);
  //     setLoading(false);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const bundler = new Bundler({
  //   bundlerUrl: `https://bundler.biconomy.io/api/v2/${80001}/nJPK7B3ru.dd7f7861-190d-41bd-af80-6877f74b8f44`,
  //   chainId: ChainId.POLYGON_MUMBAI,
  //   entryPointAddress: DEFAULT_ENTRYPOINT_ADDRESS,
  // });

  // const paymaster = new BiconomyPaymaster({
  //   paymasterUrl:
  //     'https://paymaster.biconomy.io/api/v1/80001/DpjwYtOnh.f88982aa-afc5-432b-80a9-14794fc54b9b', // paymaster url from dashboard
  // });

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <nav
      className={
        sticky
          ? 'stick transition-all backdrop-filter backdrop-blur-lg bg-white bg-opacity-30 bg-transparent z-50'
          : ''
      }
    >
      <section className="container max-w-[78rem] mx-auto px-6 sticky">
        <div className="relative flex items-center justify-between h-24">
          <div className="flex items-center justify-between w-full">
            <Link
              className="flex items-center justify-center max-w-[121px] sm:max-w-[161px] px-1 sm:px-[5.33px] transition-all"
              href="/"
            >
              <div className="text-white text-[20px]">
                <SiBlockchaindotcom />
              </div>
              &nbsp;
              <p className="text-white text-[25px] font-bold">Menova</p>
            </Link>
            <div className="hidden sm:flex items-center w-full justify-center transition-all">
              <div className="flex sm:space-x-4 md:space-x-10 justify-center text-white transition-all">
                <Link href="/">
                  <button type="button" className="text-base font-normal">
                    Home
                  </button>
                </Link>
                <Link href="/explore">
                  <button type="button" className="text-base font-normal">
                    Explore
                  </button>
                </Link>
                <button
                  type="button"
                  className="text-base font-normal"
                  onClick={handleOpenModal}
                >
                  Create
                </button>
              </div>
            </div>
            {/* <div className="absolute right-12">
              <ConnectButton showBalance={false} />
            </div> */}
            {!loading && !address && (
              <button onClick={connectWallet} className="text-white">
                Connect to Based Web3
              </button>
            )}
            {loading && <p>Loading Smart Account...</p>}
            {address && (
              <h2 className="text-white">Smart Account: {address}</h2>
            )}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <Link href="/profile">
              <span className="text-end ml-[80px] p-2 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
            </Link>
          </div>

          {/* <div className="absolute inset-y-0 right-0 flex items-center transition-all sm:hidden">
            <button
              className="min-[412px]:text-white min-[412px]:bg-[#101010]/[.3]  min-[412px]:backdrop-blur-lg text-white rounded-sm w-6 h-6 inline-flex items-center justify-center rounded-mdx hover:bg-none focus:outline-none focus:ring-none focus:ring-none transition-all"
              id="headlessui-disclosure-button-:R15id6:"
              type="button"
              aria-expanded="false"
              data-headlessui-state=""
            >
              <span className="sr-only">Open main menu</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="2"
                  y="4"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                ></rect>
                <rect
                  x="2"
                  y="11"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                ></rect>
                <rect
                  x="2"
                  y="18"
                  width="20"
                  height="2"
                  rx="1"
                  fill="currentColor"
                ></rect>
              </svg>
            </button>
          </div> */}
        </div>
      </section>
      <ChooseCreate
        openMintModal={openModal}
        handleOnClose={() => setOpenModal(false)}
      />
    </nav>
  );
};

export default Nav2;

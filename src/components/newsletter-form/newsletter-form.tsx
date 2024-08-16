import {  useEffect, useState } from 'react';
import nftImage from '../../assets/nft.png';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { ethers } from 'ethers';
import { useAccount } from 'wagmi';
import contractABI from '../../contractABI.json';
import FlipCard, { BackCard, FrontCard } from '../FlipCard/FlipCard';

const contractAddresses: { [key: number]: string } = {
  8453: '0x1EB4E6B06Fb35Ca24D8c309750D1bD825aEf0B81', // Base
  59144: '0xca4eba1b019b3988a0faafced98dbfef8e183b37', // Linea Mainnet
  534352: '0x71fB0F1FfD683369771f9F93443eFBe45C628756', // Scroll
};

const getExplorerUrl = (chainId: number, txHash: string): string => {
  switch(chainId) {
    case 8453:
      return `https://basescan.org/tx/${txHash}`;
    case 59144:
      return `https://lineascan.build/tx/${txHash}`;
    case 534352:
      return `https://scrollscan.com/tx/${txHash}`;
    default:
      return '';
  }
};

const getExplorerName = (chainId: number): string => {
  switch(chainId) {
    case 8453:
      return 'BaseScan';
    case 59144:
      return 'LineaScan';
    case 534352:
      return 'ScrollScan';
    default:
      return '';
  }
};

const getOpenSeaUrl = (chainId: number, contractAddress: string, tokenId: number): string => {
  switch(chainId) {
    case 8453:
      return `https://opensea.io/assets/base/${contractAddress}/${tokenId}`;
    default:
      return '';
  }
};

const NewsletterForm = () => {
  const { address, isConnected } = useAccount();
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [contractAddress, setContractAddress] = useState<string | null>(null);
  const [isMinted, setIsMinted] = useState(false);
  const [txHash, setTxHash] = useState<string | null>(null);
  const [userTokenId, setUserTokenId] = useState<number | null>(null);
  const [explorerName, setExplorerName] = useState('Block Explorer');
  const [showOpenSea, setShowOpenSea] = useState(false);

  useEffect(() => {
    const setupProvider = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const web3Provider = new ethers.BrowserProvider(window.ethereum);
        setProvider(web3Provider);
        const signer = await web3Provider.getSigner();
        setSigner(signer);
        const chainId = await web3Provider.getNetwork().then(network => network.chainId);
        const currentContractAddress = contractAddresses[Number(chainId)];
        setContractAddress(currentContractAddress);
        if (currentContractAddress) {
          const contractInstance = new ethers.Contract(currentContractAddress, contractABI, signer);
          setContract(contractInstance);
        } else {
          console.error('Contract not supported in the current network');
        }
      } else {
        console.error('MetaMask is not installed');
      }
    };

    if (isConnected) {
      setupProvider();
    }
  }, [isConnected]);

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('chainChanged', () => {
        window.location.reload();
      });
    }
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('chainChanged', () => {
          window.location.reload();
        });
      }
    };
  }, []);

  useEffect(() => {
    const updateExplorerName = async () => {
      if (provider) {
        const network = await provider.getNetwork();
        const chainId = Number(network.chainId);
        setExplorerName(getExplorerName(chainId));
      }
    };

    updateExplorerName();
  }, [provider]);

  useEffect(() => {
    const updateExplorerName = async () => {
      if (provider) {
        const network = await provider.getNetwork();
        const chainId = Number(network.chainId);
        setExplorerName(getExplorerName(chainId));
        setShowOpenSea(chainId === 8453);
      }
    };

    updateExplorerName();
  }, [provider]);

  const mintNFT = async () => {
    if (contract && address) {
      try {
        const tx = await contract.mint(1);
        setTxHash(tx.hash);
        const receipt = await tx.wait();
        setIsMinted(true);
        const mintEvent = receipt.logs.find(log => log.eventName === 'Transfer');
        if (mintEvent) {
          const newTokenId = mintEvent.args.tokenId;
          setUserTokenId(Number(newTokenId));
        } else {
          console.error("Mint event not found in transaction logs");
        }
      } catch (error) {
        console.error(error);
        setIsMinted(false);
      }
    } else {
      setIsMinted(false);
    }
  };

  return (
    <div className="control">
      {isConnected && (
      <div style={{ flex: '0 0 auto' }}>
        <br></br>
        <FlipCard>
          <FrontCard isCardFlipped={isMinted}>
            <img
              src={nftImage}
              width="500"
              height="500"
              alt="NFT"
              style={{ width: '100%', height: 'auto' }}
            />
            <h1 style={{ marginTop: 24 }}>Sparkle Beam NFT</h1>
          </FrontCard>
          <BackCard isCardFlipped={isMinted}>
            <div style={{ padding: 24 }}>
              <img
                src={nftImage}
                width="80"
                height="80"
                alt="NFT"
                style={{ borderRadius: 8 }}
              />
              <h2 style={{ marginTop: 24, marginBottom: 6 }}>NFT Minted.</h2>
              <p style={{ marginBottom: 24 }}>
                Your NFT will show up in your wallet in the next few minutes.
              </p>
              {txHash && provider && (
                <p style={{ marginBottom: 6 }}>
                  Show on{' '}
                  <a 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      provider.getNetwork().then(network => {
                        const chainId = Number(network.chainId);
                        const url = getExplorerUrl(chainId, txHash);
                        window.open(url, '_blank');
                      });
                    }}
                    rel="noopener noreferrer"
                  >
                    {explorerName}
                  </a>
                </p>
              )}
              {txHash && provider && contractAddress && userTokenId !== null && showOpenSea && (
                <p>
                  View on{' '}
                  <a href="#" onClick={async (e) => {
                    e.preventDefault();
                    const chainId = await provider.getNetwork().then(network => network.chainId);
                    window.open(getOpenSeaUrl(Number(chainId), contractAddress, userTokenId), '_blank');
                  }} rel="noopener noreferrer">
                    OpenSea
                  </a>
                </p>
              )}
            </div>
          </BackCard>
        </FlipCard>
      </div>
      )}
        <br></br>
          <ConnectButton
            accountStatus={{
              smallScreen: 'avatar',
              largeScreen: 'avatar',
            }}
            showBalance={{
              smallScreen: false,
              largeScreen: true,
            }} />
        <br></br>
        {isConnected && (
          <button onClick={mintNFT}
          className="-mt-px inline-flex cursor-pointer justify-center whitespace-nowrap rounded-sm border-0
          bg-gradient-to-r from-primary-600 to-primary-600 px-7 py-4 text-center font-medium leading-3
          text-white no-underline shadow-lg">
            MINT
          </button>
        )}
    </div>
  );
};

export default NewsletterForm;

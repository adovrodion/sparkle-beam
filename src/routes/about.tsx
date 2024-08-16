import { Article } from '@/components/article'
import { Layout } from '@/components/layout'
import nftImage from '../assets/nft.png';

function AboutPage() {
  return (
    <Layout>
      <Article
        title={
          <span>
            <span style={{ color: '#4628e5' }}>Sparkle Beam</span>
          </span>
        }
        imageAlt="Sparkle Beam NFT"
        imageSrc={nftImage}
      >
        {/* prettier-ignore */}
        <p style={{ fontSize: '1.1rem', textAlign: 'justify' }}>
          In the shimmering realm of Cryptopia, Sparkle Beam the unicorn possessed the extraordinary power to transform gloom into joy. When a cloud of FUD threatened the digital landscape, Sparkle Beam galloped forth, her rainbow mane trailing glittering joy-coins. Her magical journey turned NFTrees into bloom, cracked open Hodl-rocks to reveal elation crystals, and even made the Old Whale smile. With a final leap, she shattered the FUD cloud into a shower of meme tokens, proving that her joy was the most valuable and unique NFT in all of Cryptopia – a priceless asset that could never be duplicated.
        </p>
      </Article>
    </Layout>
  )
}

export default AboutPage;

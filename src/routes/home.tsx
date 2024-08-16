import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title={
          <span>
            Mint <span style={{ color: '#4628e5' }}>Sparkle Beam</span> NFT
          </span>
        }
        content="Your defender Sparkle Beam"
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}

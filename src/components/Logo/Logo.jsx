import logoHeader from '../../assets/logo-header.svg'
import logoFooter from '../../assets/logo-footer.svg'

const logos = {
  dark: logoHeader,
  light: logoFooter,
}

export default function Logo({ variant = 'dark' }) {
  return (
    <img src={logos[variant]} alt="Digital Store" width={253} height={44} />
  )
}

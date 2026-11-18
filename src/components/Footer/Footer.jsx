import { useState } from 'react'
import Information from '../Information'
import Logo from '../Logo'
import { categoryLinks, informationLinks } from '../../data/footerLinks'
import facebookIcon from '../../assets/facebook.svg'
import instagramIcon from '../../assets/instagram.svg'
import twitterIcon from '../../assets/twitter.svg'
import styles from './Footer.module.css'

const socials = [
  { name: 'Facebook', href: 'https://www.facebook.com', icon: facebookIcon },
  { name: 'Instagram', href: 'https://www.instagram.com', icon: instagramIcon },
  { name: 'Twitter', href: 'https://twitter.com', icon: twitterIcon },
]

export default function Footer() {
  const [year] = useState(() => new Date().getFullYear())

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div>
          <Logo variant="light" />
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <ul className={styles.socials}>
            {socials.map((social) => (
              <li key={social.name}>
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <img src={social.icon} alt={social.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Information title="Informação" informations={informationLinks} />
        <Information title="Categorias" informations={categoryLinks} />

        <div>
          <h2 className={styles.title}>Contato</h2>
          <address className={styles.contact}>
            <p>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </p>
            <p>(85) 3051-3411</p>
          </address>
        </div>
      </div>

      <div className="container">
        <hr className={styles.divider} />
        <p className={styles.copyright}>© {year} Digital Store</p>
      </div>
    </footer>
  )
}

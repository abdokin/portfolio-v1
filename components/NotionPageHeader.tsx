import * as React from 'react'

import * as types from 'notion-types'
import { IoMoonSharp } from '@react-icons/all-files/io5/IoMoonSharp'
import { IoSunnyOutline } from '@react-icons/all-files/io5/IoSunnyOutline'
import cs from 'classnames'
import { Header, Search } from 'react-notion-x'

import { isSearchEnabled, navigationStyle } from '@/lib/config'
import { useDarkMode } from '@/lib/use-dark-mode'

import styles from './styles.module.css'
import Link from 'next/link'
import Logo from './Logo'

const ToggleThemeButton = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const onToggleTheme = React.useCallback(() => {
    toggleDarkMode()
  }, [toggleDarkMode])

  return (
    <div
      className={cs('breadcrumb', 'button', !hasMounted && styles.hidden)}
      onClick={onToggleTheme}
    >
      {hasMounted && isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
    </div>
  )
}

export const NotionPageHeader: React.FC<{
  block: types.CollectionViewPageBlock | types.PageBlock
}> = ({ block }) => {
  // const { mapPageUrl } = useNotionContext()

  if (navigationStyle === 'default') {
    return <Header block={block} />
  }
  // console.log("block =", block.properties.title[0][0])

  return (
    <header className='notion-header'>
      <div className='notion-nav-header'>
        {/* <Breadcrumbs block={block} rootOnly={true} /> */}
        <Logo />
        <div className='notion-nav-header-rhs breadcrumbs'>
          {/* {navigationLinks
            ?.map((link, index) => {
              if (!link.pageId && !link.url) {
                return null
              }

              if (link.pageId && link.title !== 'Contact') {
                return (
                  <Link
                    href={mapPageUrl(link.pageId)}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </Link>
                )
              } else if(link.title !== 'Contact') {
                return (
                  <Link
                    href={link.url}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </Link>
                )
              }
            })
            .filter(Boolean)} */}
            <Link
            href={'/blog'}
            className={cs(styles.navLink, 'breadcrumb', 'button')}
          >
            Blog
          </Link>
        
          <Link
            href={'/about'}
            className={cs(styles.navLink, 'breadcrumb', 'button')}
          >
            About
          </Link>
          <Link
            href={'/contact'}
            className={cs(styles.navLink, 'breadcrumb', 'button')}
          >
            Contact
          </Link>
          <ToggleThemeButton />

          {isSearchEnabled && <Search block={block} title={'search'}/>}
        </div>
      </div>
    </header>
  )
}

import type { FC } from 'react'
import classNames from 'classnames'
import style from './style.module.css'

export type AppIconProps = {
  size?: 'xs' | 'tiny' | 'small' | 'medium' | 'large'
  rounded?: boolean
  icon?: string
  background?: string
  className?: string
}

const AppIcon: FC<AppIconProps> = ({
  size = 'large',
  rounded = false,
  background,
  className,
}) => {
  return (
    <span
      className={classNames(
        style.appIcon,
        size !== 'large' && style[size],
        //rounded && style.rounded,
        className ?? '',
      )}
      style={{
        backgroundColor: 'transparent',
        backgroundImage: `url(/images/bar-logo.png)`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right',
        width: '220px',
        height: '45px',
      }}
    >
    </span>
  )
}

export default AppIcon

import React from 'react'
import { Switch, changeTheme, useTheme } from '@nextui-org/react'

type Props = {}

const Nav = (props: Props) => {
  const { type, isDark } = useTheme();

  const handleChange = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    window.localStorage.setItem('data-theme', nextTheme); // you can use any storage
    changeTheme(nextTheme);
  }

  return (
    <div>
      The current theme is: {type}
      <Switch
        checked={isDark}
        onChange={handleChange}
      />
    </div>
  )
}

export default Nav
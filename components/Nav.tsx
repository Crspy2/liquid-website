import React from 'react'
import { Switch, changeTheme, Navbar, Button, Link, Text, useTheme } from "@nextui-org/react";

type Props = {}

const Nav = (props: Props) => {
  const { type, isDark } = useTheme();

  const handleChange = () => {
    const nextTheme = isDark ? 'light' : 'dark';
    window.localStorage.setItem('data-theme', nextTheme); // you can use any storage
    changeTheme(nextTheme);
  }

  return (
    <Navbar shouldHideOnScroll isBordered={isDark} variant="sticky">
    <Navbar.Brand>
      <img src='/logo.png' alt='logo' className='w-20 h-20'/>
      <Text b color="inherit" hideIn="xs">
        Liquid
      </Text>
    </Navbar.Brand>
    <Navbar.Content hideIn="xs" variant="underline">
      <Navbar.Link href="#">Features</Navbar.Link>
      <Navbar.Link isActive href="#">Reviews</Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link>
      <Navbar.Link href="#">FAQ</Navbar.Link>
    </Navbar.Content>
    <Navbar.Content>
      <Switch
        checked={isDark}
        onChange={handleChange}
      />
      <Navbar.Link color="inherit" href="#">
        Login
      </Navbar.Link>
      <Navbar.Item>
        <Button auto flat as={Link} href="#">
          Sign Up
        </Button>
      </Navbar.Item>
    </Navbar.Content>
  </Navbar>
  )
}

export default Nav

{/* <div>
      The current theme is: {type}
      <Switch
        checked={isDark}
        onChange={handleChange}
      />
    </div> */}
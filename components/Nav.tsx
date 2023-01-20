import { Navbar, Button, Link, Image } from "@nextui-org/react";

export default function App() {
  return (
      <Navbar maxWidth="fluid" variant="sticky" containerCss={{$$navbarBackgroundColor: "transparent", $$navbarBlurBackgroundColor: "transparent"}}>
        <Navbar.Brand>
            <Link href="/">
              <Image src="/logo.png" alt="liquid-web-logo" width={97.5} height={97.5} className="-ml-5"/>
            </Link>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">Status</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="https://discord.gg/ourserver" target="_blank">Discord</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Login
          </Navbar.Link>
          <Navbar.Item>
            <Button shadow color="primary" className="outline-gradient" auto>
              Sign Up
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
  )
}
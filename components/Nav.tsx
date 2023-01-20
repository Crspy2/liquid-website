import { Navbar, Button, Link, Text } from "@nextui-org/react";
import Image from "next/image";

export default function App() {
  return (
      <Navbar maxWidth="fluid" variant="sticky" css={{background: "$"}}>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            <Link href="/" className="outline-none">
              <Image src="/logo.png" alt="liquid-web-logo" width={97.5} height={97.5} className="-ml-5"/>
            </Link>
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">Customers</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
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
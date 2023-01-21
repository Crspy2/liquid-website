import React from "react"
import { Modal, Text, Input, Row, Checkbox } from "@nextui-org/react"
import { MdEmail } from "react-icons/md"
import { Si1Password } from "react-icons/si"

export default function Login() {
  const [visible, setVisible] = React.useState(false)
  const handler = () => setVisible(true)

  const closeHandler = () => {
    setVisible(false)
    console.log("closed")
  };

  return (
    <div>
        <button onClick={handler} className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-blue-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-930 group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-blue-600 group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
            <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Log In</span>
        </button>
        <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
        >
            <Modal.Header>
            <Text id="modal-title" size={18} css={{userSelect: "none"}}>
                Liquid Sign In
            </Text>
            </Modal.Header>
            <Modal.Body>
            <Input
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Email"
                contentLeft={<MdEmail />}
            />
            <Input.Password
                clearable
                bordered
                fullWidth
                color="primary"
                size="lg"
                placeholder="Password"
                contentLeft={<Si1Password />}
            />
            <Row justify="space-between">
                <Checkbox>
                <Text size={14} css={{userSelect: "none"}}>Remember me</Text>
                </Checkbox>
                <Text size={14} css={{userSelect: "none"}}>Forgot password?</Text>
            </Row>
            </Modal.Body>
            <Modal.Footer>
            <button onClick={closeHandler} className="border-2 border-red-600 rounded-lg px-3 py-2 text-red-400 cursor-pointer hover:bg-red-600 hover:text-red-200">
                Close
            </button>
            <button onClick={closeHandler} className="border-2 border-blue-500 rounded-lg px-3 py-2 text-blue-400 cursor-pointer hover:bg-blue-500 hover:text-blue-300">
                Sign in
            </button>
            </Modal.Footer>
        </Modal>
    </div>
  );
}
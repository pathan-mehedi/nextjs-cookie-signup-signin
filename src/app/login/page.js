"use client";

import React from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    InputRightElement,
    Button,
    InputGroup,
    Flex, Spacer, Center
} from "@chakra-ui/react";

function page() {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
        <div className='container flex'>
            <FormControl>
                <Input type='email' placeholder='Enter Email'/>
                <FormHelperText>We'll never share your email.</FormHelperText>
                <div>
                <InputGroup size='md'>
                    <Input
                        pr='4.5rem'
                        type={show ? "text" : "password"}
                        placeholder='Enter password'
                    />
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
                </div>
            </FormControl>
        </div>
    );
}

export default page;

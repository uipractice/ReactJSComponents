import Prism from "prismjs";
import "../../prism.css";
import React, { useEffect, useState } from "react";
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/material/Button';
import Link from '@mui/joy/Link';

export const MatForm = () => {

  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const handleChange = (event) => {
    const isValidEmail = validateEmail(event.target.value);
    setIsEmailValid(isValidEmail);
  }

  return (
    <>
      <div className="demo-wrapper">
        <div className='mb-2'>
          <strong>Basic Login Form</strong>
        </div>
        <div className='w-100'>
          <Sheet
            sx={{
              width: 300,
              mx: 'auto',
              my: 4,
              py: 3,
              px: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              borderRadius: 'sm',
              boxShadow: 'md',
            }}
            variant="outlined"
          >
            <div>
              <Typography level="h4" component="h1">
                <b>Welcome!</b>
              </Typography>
              <Typography level="body2">Sign in to continue.</Typography>
            </div>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="johndoe@email.com"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                placeholder="password"
              />
            </FormControl>
            <Button variant='contained' className="btn-submit" disabled={!isEmailValid}>Log in</Button>
            <Typography
              endDecorator={<Link href="#">Sign up</Link>}
              fontSize="sm"
              sx={{ alignSelf: 'center' }}
            >
              Don&apos;t have an account?
            </Typography>
          </Sheet>
        </div>
        <div className="compo-description">
          <h4>Description</h4>
          <p>
            Material UI for a basic login page using Joy UI.
          </p>
          <h5>Steps</h5>
          <ul>
            <li>
              <strong>Step 1 :</strong> Install Dependency to your project root
              folder : <code>npm install @mui/joy </code><br />
              <code>npm i '@babel/plugin-proposal-decorators' </code><br />
              <code>npm i '@babel/plugin-transform-flow-strip-types'</code><br />
              <code>npm i '@babel/plugin-transform-runtime' </code><br />
            </li>
            <li>
              <strong>Step 2 :</strong> Import components,
              <code>import Sheet from '@mui/joy/Sheet';</code><br />
              <code>import Typography from '@mui/joy/Typography';</code><br />
              <code>import FormControl from '@mui/joy/FormControl';</code><br />
              <code>import FormLabel from '@mui/joy/FormLabel';</code><br />
              <code>import Input from '@mui/joy/Input';</code><br />
              <code>import Button from '@mui/material/Button';</code><br />
              <code>import Link from '@mui/joy/Link';</code><br />
            </li>
            <li>
              <strong>Step 3 :</strong> Refer React Material UI code under the
              'Code' tab, to understand the usage of component.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
export const MatFormCode = () => {
  useEffect(() => Prism.highlightAll(), []);
  return (
    <div className="jsx-code-wrapper">
      <h4>React Bootstrap code</h4>
      <pre style={{ marginRight: "20px", background: "#fff" }}>
        <code className="language-javascript">
          {`
import React from 'react'
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/material/Button';
import Link from '@mui/joy/Link';

export const MatForm = () => {
  const [isEmailValid, setIsEmailValid] = useState(false);

  const validateEmail = (email) => {
    var re = /\\S+@\\S+\\.\\S+/;
    return re.test(email);
  }

  const handleChange = (event) => {
    const isValidEmail = validateEmail(event.target.value);
    setIsEmailValid(isValidEmail);
  }
  return (`}
        </code>
        <code className="language-markup">
          {`
          <>
          <div className="demo-wrapper">
          <div className='mb-2'>
            <strong>Basic Login Form</strong>
          </div>
          <div className='w-100'>
            <Sheet
              sx={{
                width: 300,
                mx: 'auto',
                my: 4,
                py: 3,
                px: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                borderRadius: 'sm',
                boxShadow: 'md',
              }}
              variant="outlined"
            >
              <div>
                <Typography level="h4" component="h1">
                  <b>Welcome!</b>
                </Typography>
                <Typography level="body2">Sign in to continue.</Typography>
              </div>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="johndoe@email.com"
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  placeholder="password"
                />
              </FormControl>
              <Button variant='contained' className="btn-submit" disabled={!isEmailValid}>Log in</Button>
              <Typography
                endDecorator={<Link href="#">Sign up</Link>}
                fontSize="sm"
                sx={{ alignSelf: 'center' }}
              >
                Don&apos;t have an account?
              </Typography>
            </Sheet>
          </div>
        </>`}
        </code>
        <code className="language-javascript">{`
  );
}
 `}</code>
      </pre>
    </div>
  )
}
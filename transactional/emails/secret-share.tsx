import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

interface SecretShareProps {
  link: string
}

const baseUrl = process.env.BASE_URL || ""

export const SecretShare = ({ link }: SecretShareProps) => (
  <Html>
    <Head />
    <Preview>New Secret Message!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Img src={`${baseUrl}/static/logo.png`} height="58" alt="B3Note" />
        </Section>
        <Heading style={h1}>New Secret Message!</Heading>
        <Text style={heroText}>
          Someone has shared a secret message with you. Click the button below
        </Text>
        <Section style={codeBox}>
          <Button href={link} style={linkButton}>
            View Message
          </Button>
          <Text style={text}>
            If the button above doesn&apos;t work, you can also copy and paste
            this link into your browser:
          </Text>
          <Text style={text}>{link}</Text>
          <Text style={noteText}>
            Note: this link will expire in 24 hours, and can only be viewed
            once.
          </Text>
        </Section>
        <Text style={text}>
          This is a simple demo of the Vetkd library to encrypt and decrypt
          messages. The source code is available on{" "}
          <Link href="https://github.com/B3Pay/vetkd_examples">GitHub</Link>.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default SecretShare

const main = {
  margin: "0 auto",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
}

const container = {
  backgroundColor: "#65b5f6",
  maxWidth: "600px",
  margin: "0 auto",
  border: "2px solid",
  borderRadius: "4px",
  borderColor: "#616161",
  padding: "10px",
}

const logoContainer = {
  display: "flex",
  justifyContent: "center" as const,
  textAlign: "center" as const,
  marginTop: "30px",
}

const h1 = {
  color: "#1d1c1d",
  fontSize: "36px",
  fontWeight: "700",
  margin: "30px 0",
  padding: "0",
  lineHeight: "42px",
}

const heroText = {
  fontSize: "20px",
  lineHeight: "28px",
  marginBottom: "30px",
}

const codeBox = {
  background: "rgb(245, 244, 245)",
  borderRadius: "4px",
  marginRight: "50px",
  marginBottom: "30px",
  padding: "20px 20px",
}

const linkButton = {
  fontSize: "20px",
  textAlign: "center" as const,
  width: "100%",
  height: "100%",
  border: "2px solid",
  borderColor: "#616161",
  borderRadius: "4px",
  backgroundColor: "#f06292",
  color: "#fff",
}

const text = {
  color: "#000",
  fontSize: "14px",
  lineHeight: "24px",
}

const noteText = {
  color: "#ff0000",
  fontSize: "16px",
  lineHeight: "24px",
}

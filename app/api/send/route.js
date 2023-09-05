import { NextResponse } from "next/server"

import { resend } from "../../../lib/resend"
import SecretShare from "../../../transactional/emails/secret-share"

export async function POST(req) {
  console.log(req)

  try {
    const data = await resend.emails.send({
      from: "info@b3pay.net",
      to: "behradmusiclove@yahoo.com",
      subject: "Secret Share",
      react: SecretShare({ link: "Bu" }),
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}

export async function GET(req) {
  const vetkd = await import("ic-vetkd-utils")
  console.log({ vetkd })

  return NextResponse.json({ message: "Hello, World!" })
}

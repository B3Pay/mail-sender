import { NextRequest, NextResponse } from "next/server"

import * as vetkd from "vetkd-utils"
import { resend } from "../../../lib/resend"
import SecretShare from "../../../transactional/emails/secret-share"

export async function POST(req: NextRequest) {
  console.log(req)

  try {
    const data = await resend.emails.send({
      from: "info@b3pay.net",
      to: "behradmusiclove@yahoo.com",
      subject: "Secret Share",
      react: SecretShare({ link: "Bu" }) as any,
    })

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error })
  }
}

export async function GET(req: NextRequest) {
  console.log({ vetkd })

  return NextResponse.json({ message: "Hello, World!" })
}

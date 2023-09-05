import type { NextApiRequest, NextApiResponse } from "next"
import SecretShare from "../../../transactional/emails/secret-share"
import { resend } from "../../lib/resend"

const send = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req

  switch (method) {
    case "GET": {
      const data = await resend.sendEmail({
        from: "info@b3pay.net",
        to: "behradmusiclove@yahoo.com",
        subject: "Secret Share",
        react: SecretShare({ link: "Bu" }) as any,
      })

      return res.status(200).send(data)
    }
    default:
      res.setHeader("Allow", ["GET"])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

export default send

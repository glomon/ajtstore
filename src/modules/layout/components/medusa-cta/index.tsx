import { Text } from "@medusajs/ui"

import Medusa from "../../../common/icons/medusa"
import NextJs from "../../../common/icons/nextjs"

const MedusaCTA = () => {
  return (
    <Text className="flex  txt-compact-small-plus items-center text-ui-fg-disabled">
      Powered by Next.js<a href="https://nextjs.org" target="_blank" rel="noreferrer">
       {/*  <NextJs fill="#9ca3af" /> */}
      </a>
    </Text>
  )
}

export default MedusaCTA

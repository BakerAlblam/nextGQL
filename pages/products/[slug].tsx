

import { useRouter } from 'next/router'

export default function ProductPage() {

  const router = useRouter()

  console.log(router.query.productId)

  return (
    <div>
      The product ID is {router.query.productId} 
    </div>
  )

}
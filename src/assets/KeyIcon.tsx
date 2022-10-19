import * as React from 'react'
import { SVGProps } from 'react'

const KeyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={25} height={26} fill="none" viewBox="0 0 25 26" {...props}>
    <path
      d="m21.776 2.597-2.041 2.078m0 0 3.061 3.117-3.572 3.637-3.06-3.117m3.57-3.637-3.57 3.637m-4.195 4.27c.527.53.946 1.16 1.233 1.854a5.805 5.805 0 0 1 .014 4.391 5.722 5.722 0 0 1-1.22 1.863 5.608 5.608 0 0 1-1.83 1.242 5.526 5.526 0 0 1-4.312-.014 5.61 5.61 0 0 1-1.821-1.255 5.77 5.77 0 0 1-1.576-4.02 5.766 5.766 0 0 1 1.644-3.99 5.563 5.563 0 0 1 3.92-1.674 5.56 5.56 0 0 1 3.947 1.604l.001-.001Zm0 0 4.194-4.27"
      stroke="gray"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default KeyIcon

import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {

  /* config options here */ 
  // basePath: '/.',

  /*
  // Next.js.
  // https://github.com/shadcn-ui/ui/blob/078dfe66072c4ca780bbc99d4ad4b13b1f44fe7e/packages/shadcn/src/utils/get-project-info.ts#L71C1-L77C4%E2%80%9D
  if (configFiles.find((file) => file.startsWith("next.config."))?.length) {
    type.framework = isUsingAppDir
      ? FRAMEWORKS["next-app"]
      : FRAMEWORKS["next-pages"]
    type.isRSC = isUsingAppDir
    return type
  }
  
  //
  
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '3000',
				pathname: '/assets/**',
				search: '',
			},
  */

//"https://randomuser.me/api/portraits/men/4.jpg"

	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'randomuser.me',
				port: '',
				pathname: '/api/**',
				search: '',
			},
		],
	},
}
 
export default nextConfig

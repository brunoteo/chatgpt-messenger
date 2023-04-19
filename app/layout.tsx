import './globals.css';
import SideBar from '@/components/SideBar';
import SessionProvider from '@/components/SessionProvider';
import { getServerSession } from "next-auth";
import { authOptions } from './api/auth/[...nextauth]/route';
import Login from '@/components/Login';

export const metadata = {
  title: 'ChatGPT clone',
  description: 'A clone of chatGPT',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>

              {/* ClientProvider */}

              <div className="bg-[#343541] flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  )
}

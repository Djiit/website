import Link from 'next/link'
import { formatDate } from 'app/blog/utils'
import { talks } from './data'

export const metadata = {
  title: 'Talks',
  description: 'Talks and presentations by Julien Tanay.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Talks</h1>
      <div>
        {talks
          .sort((a, b) => {
            if (new Date(a.date) > new Date(b.date)) {
              return -1
            }
            return 1
          })
          .map((talk, index) => (
            <div
              key={index}
              className="flex flex-col space-y-1 mb-4"
            >
              <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                  {formatDate(talk.date, false)}
                </p>
                <div className="flex flex-col">
                  {talk.link ? (
                    <a
                      href={talk.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-900 dark:text-neutral-100 tracking-tight underline"
                    >
                      {talk.title}
                    </a>
                  ) : (
                    <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                      {talk.title}
                    </p>
                  )}
                  <p className="text-neutral-500 dark:text-neutral-500 text-sm">
                    {talk.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}

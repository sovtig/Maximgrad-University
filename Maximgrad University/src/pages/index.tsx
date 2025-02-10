import { useState } from 'react'
import Head from 'next/head'
import Workflow from '../components/Workflow'
import TopicInput from '../components/TopicInput'
import KnowledgeBase from '../components/KnowledgeBase'

export default function Home() {
  const [topics, setTopics] = useState<string[]>([])

  const addTopic = (topic: string) => {
    setTopics([...topics, topic])
  }

  return (
    <div>
      <Head>
        <title>Learning Workflow</title>
        <meta name="description" content="Automated learning workflow system" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Learning Workflow</h1>
        <Workflow />
        <TopicInput addTopic={addTopic} />
        <KnowledgeBase topics={topics} />
      </main>
    </div>
  )
}
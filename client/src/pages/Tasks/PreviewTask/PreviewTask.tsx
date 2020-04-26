import React from 'react'
import { useStore } from 'effector-react'
import { PageLoader, PageError } from '../../../components/Loaders'
import { Paper } from '../../../components'
import { PreviewPage, task } from '../model/previewTask'
import styles from './PreviewTask.module.css'

type PreviewTaskProps = {
  id: number
}

export const PreviewTask = ({ id }: PreviewTaskProps) => {
  React.useEffect(() => PreviewPage.onMount(id), [id])

  const { isLoading, isFail } = useStore(PreviewPage.$status)
  const kekTask = useStore(task.$task)

  if (isLoading) {
    return <PageLoader />
  }

  if (isFail) {
    return <PageError />
  }

  return (
    <Paper className={styles.preview}>
      <h2>Задание "{kekTask?.name}"</h2>
      <div className={styles.description}>
        <span>Описание</span>
        <div dangerouslySetInnerHTML={{ __html: kekTask?.description ?? '' }}></div>
      </div>
    </Paper>
  )
}
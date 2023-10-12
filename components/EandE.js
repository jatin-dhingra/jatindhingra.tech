import styles from '../styles/EandE.module.scss'
import { Text, Timeline } from '@mantine/core'
import { Book2, Briefcase, Building } from 'tabler-icons-react'
function EandE() {
  return (
    <div className={styles.eandeContainer}>
      <h1 className="title">Experience and Education</h1>
      <div className={styles.timelineContainer}>
        <Timeline lineWidth={3} radius="md">

          {/* <Timeline.Item
            title="Software Developer Engineer"
            bulletSize={50}
            bullet={<Building size={25} />}
            className={styles.timelineItem}
          >
            <Text color="dimmed" size="md">
              Amdocs, Gurgaon
            </Text>
            <Text size="md" mt={4}>
              July 2023 – Present
            </Text>
          </Timeline.Item> */}
          <Timeline.Item
            title="Software Developer"
            bulletSize={50}
            bullet={<Building size={25} />}
            className={styles.timelineItem}
          >
            <Text color="dimmed" size="md">
              Amdocs, Gurgaon
            </Text>
            <Text size="md" mt={4}>
              August 2023 – Present
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Software Developer Intern"
            bulletSize={50}
            bullet={<Building size={25} />}
            className={styles.timelineItem}
          >
            <Text color="dimmed" size="md">
              Amdocs, Gurgaon
            </Text>
            <Text size="md" mt={4}>
              January 2023 – July 2023
            </Text>
          </Timeline.Item>
          

          <Timeline.Item
            title="Software Developer Intern"
            bulletSize={50}
            bullet={<Building size={25} />}
            className={styles.timelineItem}
          >
            <Text color="dimmed" size="md">
              Ivserve Technologies, Bangalore
            </Text>
            <Text size="md" mt={4}>
              Febuary 2021 - April 2021
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Front-End Developer Intern"
            bulletSize={50}
            bullet={<Building size={25} />}
            className={styles.timelineItem}
          >
            <Text color="dimmed" size="md">
              Ijob-Depot, Bangalore
            </Text>
            <Text size="md" mt={4}>
              November 2020 - January 2021
            </Text>
          </Timeline.Item>

          <Timeline.Item
            title="Bachelor of Technology in Information Technology"
            bulletSize={50}
            bullet={<Book2 size={25} />}
            className={styles.timelineItem}
          >
            <Text color="dimmed" size="md">
              Vellore Institute Of Technology, Vellore
            </Text>
            <Text size="md" mt={4}>
              July 2019 – June 2023
            </Text>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  )
}

export default EandE

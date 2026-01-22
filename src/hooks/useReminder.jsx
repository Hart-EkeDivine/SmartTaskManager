import { useEffect } from "react";

export default function useReminder(tasks) {
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    const interval = setInterval(() => {
      const now = new Date();

      tasks.forEach(task => {
        if (!task.completed && task.dueDate && task.dueTime && !task.notified) {
          const taskTime = new Date(`${task.dueDate}T${task.dueTime}`);
          const diffMinutes = Math.floor((taskTime - now) / 60000);

          if (diffMinutes === 5) {
            new Notification("⏰ Task Reminder", {
              body: `${task.title} is due in 5 minutes!`,
            });

            task.notified = true; // prevent repeat
          }
        }
      });
    }, 60000);

    return () => clearInterval(interval);
  }, [tasks]);
}

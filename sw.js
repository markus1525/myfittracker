// sw.js
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow(self.registration.scope));
});

self.addEventListener('message', e => {
  if (e.data?.type === 'SHOW_NOTIFICATION') {
    e.waitUntil(
      self.registration.showNotification(e.data.title, e.data.options)
    );
  }
});
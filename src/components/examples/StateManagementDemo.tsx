'use client'

import { useUIStore } from '@/store/ui-store'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

/**
 * Example state management using Zustand
 * Demonstrates:
 * - Global client state without Redux boilerplate
 * - Simple API with hooks
 * - Perfect for UI state (modals, theme, notifications)
 */
export function StateManagementDemo() {
  const {
    theme,
    setTheme,
    sidebarOpen,
    toggleSidebar,
    notifications,
    addNotification,
    removeNotification,
  } = useUIStore()

  return (
    <div className="space-y-6">
      {/* Theme Management */}
      <Card>
        <CardHeader>
          <CardTitle>Theme Management</CardTitle>
          <CardDescription>Global theme state with Zustand</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            {(['light', 'dark', 'system'] as const).map((t) => (
              <Button
                key={t}
                variant={theme === t ? 'default' : 'secondary'}
                size="sm"
                onClick={() => setTheme(t)}
              >
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </Button>
            ))}
          </div>
          <p className="text-sm text-slate">Current theme: <strong>{theme}</strong></p>
        </CardContent>
      </Card>

      {/* Sidebar State */}
      <Card>
        <CardHeader>
          <CardTitle>Sidebar State</CardTitle>
          <CardDescription>Toggle UI visibility</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button onClick={toggleSidebar} variant="secondary" size="sm">
            {sidebarOpen ? 'Close' : 'Open'} Sidebar
          </Button>
          <p className="text-sm text-slate">Sidebar is <strong>{sidebarOpen ? 'open' : 'closed'}</strong></p>
        </CardContent>
      </Card>

      {/* Notification System */}
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Test the notification system</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Button
              onClick={() => addNotification('success', 'Operation completed successfully!')}
              size="sm"
            >
              Success
            </Button>
            <Button
              onClick={() => addNotification('error', 'Something went wrong.')}
              size="sm"
              variant="accent"
            >
              Error
            </Button>
            <Button
              onClick={() => addNotification('info', 'Here is some useful information.')}
              size="sm"
              variant="secondary"
            >
              Info
            </Button>
          </div>

          {/* Notifications List */}
          {notifications.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-semibold text-charcoal">Active Notifications:</p>
              <div className="space-y-2">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-center justify-between gap-2 p-3 bg-beige rounded-md border border-taupe"
                  >
                    <div>
                      <p className="text-sm font-medium text-charcoal">{notification.type}</p>
                      <p className="text-sm text-slate">{notification.message}</p>
                    </div>
                    <button
                      onClick={() => removeNotification(notification.id)}
                      className="text-slate hover:text-charcoal transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

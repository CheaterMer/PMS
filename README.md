# Recent Changes Log

## 1. Alarm Auto-Refresh Improvements
- **Auto-Refresh Logic**: Validated and verified the periodic alarm scanning mechanism (`startAutoAlarmInterval`).
- **Toggle Support**: The feature respects the internal `autoAlarm` setting.

## 2. System Notification (Window Popup) Enhancements
- **New Toggle Control**: Added "윈도우(시스템) 알림 사용" (Use Window System Notification) checkbox in the **TM Settings > Convenience** tab.
  - Users can now explicitly choose between native OS notifications and default HTML toasts.
- **Test Feature**: Added a "테스트 알림" (Test Notification) button to help users verify browser permissions and notification visibility.
- **Permission Management**: Enhanced the permission request flow to alert users if notifications are blocked by the browser.
- **Interactive Notifications**: Clicking on a system notification window now automatically navigates to the corresponding alarm event's detail page.

## 3. Alarm Logic Optimization
- **Duplicate Prevention**: Implemented a tracking system using a `Set` data structure to record seen alarms.
  - Prevents the same alarm event from triggering repetitive notifications.
  - Identifies unique alarms using a combination of alarm text and ID.

## 4. UI Cleanup
- **Removed History Panel**: Completely removed the "Recent Edit History" (`MshowPlateHistory`) panel from the parking fee information modal, as it was deemed redundant with the entry photo display.

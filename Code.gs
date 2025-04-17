function importCurrentMonthEventsFormatted() {
  const calendarId = 'primary';
  const calendar = CalendarApp.getCalendarById(calendarId);

  const now = new Date();
  const startDate = new Date(now.getFullYear(), now.getMonth(), 1);
  const endDate = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);

  const events = calendar.getEvents(startDate, endDate);
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.clearContents();

  sheet.appendRow(['日付', '時間帯', 'タイトル', '工数（h）']);

  let lastDateStr = '';

  events.sort((a, b) => a.getStartTime() - b.getStartTime());

  events.forEach(event => {
    const title = event.getTitle();
    const start = event.getStartTime();
    const end = event.getEndTime();

    const dateStr = Utilities.formatDate(start, Session.getScriptTimeZone(), 'yyyy/MM/dd');
    const startTime = Utilities.formatDate(start, Session.getScriptTimeZone(), 'HH:mm');
    const endTime = Utilities.formatDate(end, Session.getScriptTimeZone(), 'HH:mm');

    const durationMs = end.getTime() - start.getTime();
    const durationInHours = durationMs / (1000 * 60 * 60);
    const durationRounded = Math.floor(durationInHours * 4) / 4; // ← 15分単位で工数計算

    if (lastDateStr !== '' && lastDateStr !== dateStr) {
      sheet.appendRow(['']);
    }

    sheet.appendRow([dateStr, `${startTime} – ${endTime}`, title, durationRounded]);
    lastDateStr = dateStr;
  });

  SpreadsheetApp.flush();
}

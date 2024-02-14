// pages/index.tsx

import React from 'react';
import MyCalendarLibrary from 'youngmatiascalendar'; // 내가 만든 라이브러리 import

const HomePage = () => {
  // MyCalendarLibrary를 사용하여 캘린더 데이터 생성
  const calendarData = MyCalendarLibrary.generateCalendarData(2024, 2);

  return (
    <div>
      <h1>My Next.js App</h1>
      {/* 라이브러리를 사용한 JSX */}
      <ul>
        {calendarData.map((day, index) => (
          <li key={index}>{day !== null ? day : 'Empty'}</li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;

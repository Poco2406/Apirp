import React, { createRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import events from './eventsData'; // Importez vos données d'événement depuis le fichier
import { Container } from '@mui/material';

export default function Calendar() {
  const calendarRef = createRef();

  return (
    <div>
      <Header />
      <Container maxWidth="lg" style={{marginTop: '100px'}}>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        events={events} // Utilisez le tableau d'objets importé comme données d'événement
        customButtons={{
          myTimeDayBtn: {
            text: "timeDay",
            click() {
              const calendar = calendarRef.current;

              if (calendar) {
                const calendarApi = calendar.getApi();
                calendarApi.changeView("timeGridDay");
              }
            }
          },
          myTimeWeekBtn: {
            text: "timeWeek",
            click() {
              const calendar = calendarRef.current;

              if (calendar) {
                const calendarApi = calendar.getApi();
                calendarApi.changeView("timeGridWeek");
              }
            }
          }
        }}
        headerToolbar={{
          left: "prev next",
          center: "title",
          right: "today,dayGridDay,dayGridWeek,dayGridMonth,myTimeDayBtn,myTimeWeekBtn",
        }}
      />
      </Container>
      <Footer />
    </div>
  );
}

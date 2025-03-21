"use client";

import React, { useRef, useState, useEffect } from "react";
import { MdSearch } from "react-icons/md";
import Image from "next/image";
import { useTheme } from "../context/ThemeContext";

interface DayItem {
  day: string;
  date: string;
  isActive?: boolean;
  dateObj?: Date;
  animation?: string;
}

const daysOfWeek: DayItem[] = [
  { day: "Wednesday", date: "09 Aug" },
  { day: "Yesterday", date: "10 Aug" },
  { day: "Today", date: "11 Aug", isActive: true },
  { day: "Tomorrow", date: "12 Aug" },
  { day: "Sunday", date: "13 Aug" },
  { day: "Monday", date: "14 Aug" },
];

const matches = [
  {
    tournament: "World - FIFA Women's World Cup",
    phase: "Quarter Finals",
    tournamentImage: require("../assets/image/fifa-womens.png"),
    date: new Date(2023, 7, 11), // August 11, 2023
    matches: [
      {
        time: "12:30",
        team1: "Argentina",
        team1Flag: require("../assets/image/argentina.png"),
        score1: "1",
        team2: "Italy",
        team2Flag: require("../assets/image/italy.png"),
        score2: "2",
        isLive: true,
        date: new Date(2023, 7, 11), // August 11, 2023
      },
      {
        time: "14:30",
        team1: "Portugal",
        team1Flag: require("../assets/image/portugal.png"),
        score1: "2",
        team2: "Belgium",
        team2Flag: require("../assets/image/belgium.png"),
        score2: "3",
        date: new Date(2023, 7, 11), // August 11, 2023
      },
      {
        time: "21:45",
        team1: "Ghana",
        team1Flag: require("../assets/image/ghana.png"),
        score1: "1",
        team2: "Brazil",
        team2Flag: require("../assets/image/brazil.png"),
        score2: "3",
        date: new Date(2023, 7, 11), // August 11, 2023
      },
      {
        time: "22:00",
        team1: "Uruguay",
        team1Flag: require("../assets/image/uruguay.png"),
        score1: "2",
        team2: "Poland",
        team2Flag: require("../assets/image/poland.png"),
        score2: "2",
        date: new Date(2023, 7, 11), // August 11, 2023
      },
      {
        time: "22:00",
        team1: "Spanish",
        team1Flag: require("../assets/image/spain.png"),
        score1: "3",
        team2: "Czech",
        team2Flag: require("../assets/image/czech.png"),
        score2: "3",
        date: new Date(2023, 7, 11), // August 11, 2023
      },
    ],
  },
  {
    tournament: "World - FIFA Women's World Cup",
    phase: "Quarter Finals",
    tournamentImage: require("../assets/image/fifa-womens.png"),
    date: new Date(2023, 7, 12), // August 12, 2023
    matches: [
      {
        time: "12:30",
        team1: "Argentina",
        team1Flag: require("../assets/image/argentina.png"),
        score1: "1",
        team2: "Italy",
        team2Flag: require("../assets/image/italy.png"),
        score2: "2",
        isLive: true,
        date: new Date(2023, 7, 12), // August 12, 2023
      },
      {
        time: "14:30",
        team1: "Portugal",
        team1Flag: require("../assets/image/portugal.png"),
        score1: "2",
        team2: "Belgium",
        team2Flag: require("../assets/image/belgium.png"),
        score2: "3",
        date: new Date(2023, 7, 12), // August 12, 2023
      },
      {
        time: "21:45",
        team1: "Ghana",
        team1Flag: require("../assets/image/ghana.png"),
        score1: "1",
        team2: "Brazil",
        team2Flag: require("../assets/image/brazil.png"),
        score2: "3",
        date: new Date(2023, 7, 12), // August 12, 2023
      },
      {
        time: "21:45",
        team1: "Uruguay",
        team1Flag: require("../assets/image/uruguay.png"),
        score1: "2",
        team2: "Poland",
        team2Flag: require("../assets/image/poland.png"),
        score2: "2",
        date: new Date(2023, 7, 12), // August 12, 2023
      },
      {
        time: "22:00",
        team1: "Spanish",
        team1Flag: require("../assets/image/spain.png"),
        score1: "3",
        team2: "Czech",
        team2Flag: require("../assets/image/czech.png"),
        score2: "3",
        date: new Date(2023, 7, 12), // August 12, 2023
      },
    ],
  },
  {
    tournament: "UEFA Champions League",
    phase: "Group Stage",
    tournamentImage: require("../assets/image/fifa-womens.png"),
    date: new Date(2023, 7, 10), // August 10, 2023
    matches: [
      {
        time: "20:00",
        team1: "Manchester United",
        team1Flag: require("../assets/image/spain.png"),
        score1: "2",
        team2: "Bayern Munich",
        team2Flag: require("../assets/image/poland.png"),
        score2: "1",
        date: new Date(2023, 7, 10), // August 10, 2023
      },
      {
        time: "20:00",
        team1: "Barcelona",
        team1Flag: require("../assets/image/argentina.png"),
        score1: "3",
        team2: "PSG",
        team2Flag: require("../assets/image/belgium.png"),
        score2: "0",
        date: new Date(2023, 7, 10), // August 10, 2023
      },
    ],
  },
  {
    tournament: "Premier League",
    phase: "Matchday 1",
    tournamentImage: require("../assets/image/fifa-womens.png"),
    date: new Date(2023, 7, 13), // August 13, 2023
    matches: [
      {
        time: "15:00",
        team1: "Arsenal",
        team1Flag: require("../assets/image/italy.png"),
        score1: "2",
        team2: "Liverpool",
        team2Flag: require("../assets/image/brazil.png"),
        score2: "2",
        date: new Date(2023, 7, 13), // August 13, 2023
      },
      {
        time: "17:30",
        team1: "Chelsea",
        team1Flag: require("../assets/image/ghana.png"),
        score1: "1",
        team2: "Manchester City",
        team2Flag: require("../assets/image/argentina.png"),
        score2: "0",
        date: new Date(2023, 7, 13), // August 13, 2023
      },
    ],
  },
];

const MatchesSection = () => {
  const { theme } = useTheme();

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [calendarDays, setCalendarDays] = useState<Date[]>([]);
  const [activeDays, setActiveDays] = useState<DayItem[]>(daysOfWeek);
  const [activeDayIndex, setActiveDayIndex] = useState(2); // Başlangıçta "Today" aktif
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [calendarMonth, setCalendarMonth] = useState<number>(
    new Date().getMonth()
  );
  const [calendarYear, setCalendarYear] = useState<number>(
    new Date().getFullYear()
  );

  // Seçilen tarih değiştiğinde, çevresindeki tarihleri hesapla
  useEffect(() => {
    updateVisibleDays(selectedDate);
  }, [selectedDate]);

  // Görünür günleri seçili tarihe göre güncelle
  const updateVisibleDays = (date: Date) => {
    // 3 gün öncesi, seçili tarih ve 2 gün sonrası
    const days = [];
    const direction = date > selectedDate ? "right" : "left";

    for (let i = -3; i <= 2; i++) {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() + i);
      days.push(formatDayObject(newDate, i === 0, direction)); // i=0 seçili gün
    }
    setActiveDays(days);
    setActiveDayIndex(3); // Seçili tarih ortada (index 3)

    // Takvimi de seçili tarihin ayına göre güncelle
    setCalendarMonth(date.getMonth());
    setCalendarYear(date.getFullYear());
    generateCalendarDays(date.getFullYear(), date.getMonth());
  };

  // Ay ve yıl değiştiğinde takvimi güncelle
  useEffect(() => {
    generateCalendarDays(calendarYear, calendarMonth);
  }, [calendarMonth, calendarYear]);

  // Tarih nesnesini UI'da göstermek için formatla
  const formatDayObject = (date: Date, isActive: boolean, direction = "") => {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
    };
    const formattedDate = date
      .toLocaleDateString("en-US", options)
      .replace(" ", " ");

    // Günü belirle (Bugün, Yarın, Dün veya haftanın günü)
    const dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    let displayDay = dayNames[date.getDay()];

    if (date.toDateString() === today.toDateString()) {
      displayDay = "Today";
    } else if (date.toDateString() === tomorrow.toDateString()) {
      displayDay = "Tomorrow";
    } else if (date.toDateString() === yesterday.toDateString()) {
      displayDay = "Yesterday";
    }

    // Animasyon sınıfını belirle
    let animationClass = "";
    if (direction === "right") {
      animationClass = "animate-slideInRight";
    } else if (direction === "left") {
      animationClass = "animate-slideInLeft";
    }

    return {
      day: displayDay,
      date: formattedDate,
      isActive: isActive,
      dateObj: date,
      animation: animationClass,
    };
  };

  useEffect(() => {
    generateCalendarDays(calendarYear, calendarMonth);

    // Başlangıçta görünür günleri ayarla
    updateVisibleDays(selectedDate);

    // Scroll olayı dinleyicisi ekle
    const container = scrollContainerRef.current;
    if (container) {
      let scrollTimeout: NodeJS.Timeout;

      const handleScroll = () => {
        // Kullanıcı kaydırmayı bitirdiğinde aktif günü ortala
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          // Aktif günün indeksini bul ve ortala
          centerActiveDay(activeDayIndex);
        }, 150);
      };

      container.addEventListener("scroll", handleScroll);

      // Temizlik fonksiyonu
      return () => {
        container.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout);
      };
    }
  }, []);

  // Seçili tarih değiştiğinde aktif günü ortalar
  useEffect(() => {
    if (scrollContainerRef.current) {
      // Kısa bir gecikme ile görünümü ortala (DOM güncellemesi için bekler)
      setTimeout(() => {
        centerActiveDay(activeDayIndex);
      }, 100);
    }
  }, [activeDays, activeDayIndex]);

  // Takvim günlerini belirlenen ay ve yıla göre oluştur
  const generateCalendarDays = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days = [];
    const startOffset = firstDay.getDay();

    // Önceki ayın son günlerini ekle
    for (let i = startOffset - 1; i >= 0; i--) {
      days.push(new Date(year, month, -i));
    }

    // Mevcut ayın günlerini ekle
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    // Sonraki ayın ilk günlerini ekle (toplam 42 gün olacak şekilde)
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      days.push(new Date(year, month + 1, i));
    }

    setCalendarDays(days);
  };

  const handleDayClick = (index: number) => {
    // Önceki aktif günü pasif yap, yeni günü aktif yap
    const newDays = [...activeDays];
    newDays.forEach((day) => (day.isActive = false));
    newDays[index].isActive = true;
    setActiveDays(newDays);
    setActiveDayIndex(index);

    // Seçili tarihi güncelle
    if (newDays[index].dateObj) {
      setSelectedDate(newDays[index].dateObj);
    } else {
      // Eğer dateObj yoksa, görünür seçili tarihi kullan
      updateVisibleDays(selectedDate);
    }

    // Görünümü ortala
    centerActiveDay(index);
  };

  const centerActiveDay = (index: number) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const element = container.children[index] as HTMLElement;
    if (!element) return;

    // Görünür alanın genişliği
    const containerWidth = container.offsetWidth;

    // Element bilgileri
    const elementLeft = element.offsetLeft;
    const elementWidth = element.offsetWidth;

    // Kaç eleman öncesine ve sonrasına bakılacak (görünür alanda)
    const visibleItemsCount = Math.floor(containerWidth / (elementWidth + 16)); // 16 = space-x-4

    // Hesaplanan scroll pozisyonu
    // Seçili elementin sol pozisyonu - (görünür alan genişliği - seçili element genişliği) / 2
    // Bu, elementi tam ortaya getirir
    let scrollLeft = elementLeft - (containerWidth - elementWidth) / 2;

    // Minimum 0 olmalı
    scrollLeft = Math.max(0, scrollLeft);

    // Maximum scroll sınırı
    const maxScroll = container.scrollWidth - containerWidth;
    scrollLeft = Math.min(maxScroll, scrollLeft);

    // Scroll işlemi
    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  };

  const openCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const selectDate = (date: Date) => {
    // Yönü belirle - Eskiden yeniye mi geçiyoruz yoksa tam tersi mi
    const direction = date > selectedDate ? "right" : "left";

    setIsLoading(true);
    setSelectedDate(date);
    setShowCalendar(false);

    // Görünür günleri yeni seçili tarihe göre güncelle
    setTimeout(() => {
      updateVisibleDays(date);
      setIsLoading(false);
    }, 300); // Simulate API call delay
  };

  const isSelectedDate = (date: Date) => {
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  // Filter matches for the selected date
  const filteredMatches = matches
    .map((tournament) => {
      return {
        ...tournament,
        matches: tournament.matches.filter((match) =>
          isSelectedDate(match.date)
        ),
      };
    })
    .filter((tournament) => tournament.matches.length > 0);

  // Function to check if there are matches on a specific date
  const hasMatchesOnDate = (date: Date) => {
    return matches.some((tournament) =>
      tournament.matches.some(
        (match) =>
          date.getDate() === match.date.getDate() &&
          date.getMonth() === match.date.getMonth() &&
          date.getFullYear() === match.date.getFullYear()
      )
    );
  };

  // No matches message
  const NoMatchesMessage = () => (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 text-center">
      <div className="text-gray-600 dark:text-gray-300 mb-2">
        No matches scheduled for this date
      </div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Try selecting a different date
      </div>
    </div>
  );

  return (
    <div className="w-full bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-4 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <div className="flex space-x-2">
          <div className="flex items-center bg-gray-200 dark:bg-gray-800 rounded-full px-2 py-1">
            <div className="text-xs text-white bg-red-600 px-2 py-0.5 rounded-full mr-2">
              Live
            </div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">2</div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <div
            className="flex space-x-4 overflow-x-auto pb-2 scroll-smooth scrollbar-hide w-full"
            ref={scrollContainerRef}
          >
            <div className="flex w-full gap-2">
              {activeDays.map((day, index) => (
                <div
                  key={index}
                  className={`flex-1 px-4 py-2 rounded-md cursor-pointer snap-center transition-all duration-300 transform ${
                    day.isActive
                      ? "bg-blue-600 dark:bg-gray-800 scale-105 shadow-lg z-10 border dark:border-gray-700"
                      : "bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 bg-opacity-50 hover:bg-opacity-70"
                  } motion-safe:hover:scale-105 motion-safe:focus:scale-105 ${
                    day.animation || ""
                  }`}
                  onClick={() => handleDayClick(index)}
                >
                  <div className="text-center">
                    <div
                      className={`text-xs ${
                        day.isActive
                          ? "text-white dark:text-blue-300"
                          : "text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {day.day}
                    </div>
                    <div
                      className={`text-sm font-medium ${
                        day.isActive
                          ? "text-white"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {day.date}
                    </div>
                  </div>
                </div>
              ))}
              <div
                className="flex-1 px-4 py-2 bg-transparent text-blue-600 dark:text-gray-400 border border-blue-400 dark:border-gray-700 rounded-md flex items-center justify-center cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
                onClick={openCalendar}
              >
                <span className="text-sm">View Calendar</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Date Header */}
      <div className="mb-4 flex items-center">
        <div className="bg-blue-600 h-6 w-1 rounded-full mr-2"></div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          {selectedDate.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
          })}
        </h2>
        <div className="ml-auto text-sm text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md">
          {isLoading ? (
            <div className="flex items-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse mr-2"></div>
              Loading...
            </div>
          ) : (
            `${filteredMatches.reduce(
              (total, tournament) => total + tournament.matches.length,
              0
            )} matches`
          )}
        </div>
      </div>

      {/* Matches Section */}
      <div
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-60" : "opacity-100"
        } bg-white dark:bg-gray-800 p-4 rounded-lg`}
      >
        {/* Show loading skeleton if loading */}
        {isLoading && (
          <div className="animate-pulse space-y-4">
            <div className="h-10 bg-gray-200 dark:bg-gray-700 rounded-md w-1/3 mb-4"></div>
            <div className="rounded-lg bg-gray-200 dark:bg-gray-700 h-24 w-full mb-4"></div>
            <div className="rounded-lg bg-gray-200 dark:bg-gray-700 h-24 w-full mb-4"></div>
            <div className="rounded-lg bg-gray-200 dark:bg-gray-700 h-24 w-full mb-4"></div>
          </div>
        )}

        {/* Show actual matches when not loading */}
        {!isLoading &&
          filteredMatches.map((tournament, tIndex) => (
            <div key={tIndex} className="mb-6">
              <div className="mb-2 flex items-center">
                <div className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md flex items-center">
                  <div className="mr-2 w-5 h-5 relative">
                    <Image
                      src={tournament.tournamentImage}
                      alt={tournament.tournament}
                      width={20}
                      height={20}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-sm text-gray-800 dark:text-white">
                    {tournament.tournament}{" "}
                    <span className="text-gray-500 dark:text-gray-400">
                      | {tournament.phase}
                    </span>
                  </div>
                </div>
              </div>

              {tournament.matches.map((match, mIndex) => (
                <div
                  key={mIndex}
                  className="match-card mb-3 p-3 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center">
                    <div className="w-12 text-center text-sm font-medium">
                      {match.isLive ? (
                        <span className="text-red-600 font-semibold animate-pulse">
                          Live
                        </span>
                      ) : (
                        <span className="text-gray-500 dark:text-gray-400">
                          {match.time}
                        </span>
                      )}
                    </div>

                    <div className="flex-1 grid grid-cols-3 gap-2">
                      {/* Team 1 */}
                      <div className="flex items-center justify-end">
                        <div className="text-sm font-medium text-gray-800 dark:text-white mr-3">
                          {match.team1}
                        </div>
                        <div className="w-7 h-7 relative">
                          <Image
                            src={match.team1Flag}
                            alt={match.team1}
                            width={28}
                            height={28}
                            className="w-full h-full object-contain rounded-full border border-gray-200 dark:border-gray-700"
                          />
                        </div>
                      </div>

                      {/* Score */}
                      <div className="flex items-center justify-center">
                        <div className="px-3 py-1 bg-gray-100 dark:bg-yellow-600 rounded-md flex items-center justify-center min-w-[70px]">
                          <div className="text-sm font-medium text-gray-800 dark:text-white">
                            {match.score1}
                          </div>
                          <span className="mx-1 text-xs text-gray-500 dark:text-white">
                            -
                          </span>
                          <div className="text-sm font-medium text-gray-800 dark:text-white">
                            {match.score2}
                          </div>
                        </div>
                      </div>

                      {/* Team 2 */}
                      <div className="flex items-center">
                        <div className="w-7 h-7 relative mr-3">
                          <Image
                            src={match.team2Flag}
                            alt={match.team2}
                            width={28}
                            height={28}
                            className="w-full h-full object-contain rounded-full border border-gray-200 dark:border-gray-700"
                          />
                        </div>
                        <div className="text-sm font-medium text-gray-800 dark:text-white">
                          {match.team2}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}

        {!isLoading && !hasMatchesOnDate(selectedDate) && <NoMatchesMessage />}
      </div>

      {showCalendar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl w-full max-w-md mx-4 animate-scaleIn border border-gray-200 dark:border-gray-800">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Calendar
              </h3>
              <button
                onClick={() => setShowCalendar(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Ay ve Yıl Seçiciler */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-2">
                {/* Önceki Ay */}
                <button
                  onClick={() => {
                    if (calendarMonth === 0) {
                      setCalendarMonth(11);
                      setCalendarYear(calendarYear - 1);
                    } else {
                      setCalendarMonth(calendarMonth - 1);
                    }
                  }}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600 dark:text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {/* Ay Seçici */}
                <select
                  value={calendarMonth}
                  onChange={(e) => setCalendarMonth(parseInt(e.target.value))}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-1 px-2 rounded border-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-600"
                >
                  {[
                    "January",
                    "February",
                    "March",
                    "April",
                    "May",
                    "June",
                    "July",
                    "August",
                    "September",
                    "October",
                    "November",
                    "December",
                  ].map((month, idx) => (
                    <option key={month} value={idx}>
                      {month}
                    </option>
                  ))}
                </select>

                {/* Sonraki Ay */}
                <button
                  onClick={() => {
                    if (calendarMonth === 11) {
                      setCalendarMonth(0);
                      setCalendarYear(calendarYear + 1);
                    } else {
                      setCalendarMonth(calendarMonth + 1);
                    }
                  }}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600 dark:text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              {/* Yıl Seçici */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setCalendarYear(calendarYear - 1)}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600 dark:text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <select
                  value={calendarYear}
                  onChange={(e) => setCalendarYear(parseInt(e.target.value))}
                  className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-1 px-2 rounded border-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-gray-600"
                >
                  {Array.from(
                    { length: 11 },
                    (_, i) => calendarYear - 5 + i
                  ).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => setCalendarYear(calendarYear + 1)}
                  className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-600 dark:text-gray-300"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-2">
              {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-medium text-gray-600 dark:text-gray-400"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((date, index) => (
                <div
                  key={index}
                  className={`text-center p-2 rounded-md cursor-pointer transition-all duration-200 relative ${
                    isSelectedDate(date)
                      ? "bg-blue-600 dark:bg-yellow-600 text-white"
                      : "hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-800 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                  onClick={() => selectDate(date)}
                >
                  {date.getDate()}
                  {hasMatchesOnDate(date) && (
                    <div
                      className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                        isSelectedDate(date)
                          ? "bg-white"
                          : "bg-blue-600 dark:bg-yellow-600"
                      }`}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowCalendar(false)}
                className="px-4 py-2 bg-blue-600 dark:bg-gray-800 text-white rounded-md hover:bg-blue-700 dark:hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchesSection;

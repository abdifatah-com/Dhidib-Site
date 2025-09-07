"use client";

import { useState, useEffect } from "react";

export function useCommunityPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [reminderTime, setReminderTime] = useState<number | null>(null);
  const [hasShownInitial, setHasShownInitial] = useState(false);

  useEffect(() => {
    // Check if we should show the popup
    const checkPopupStatus = () => {
      const now = Date.now();
      
      // If there's a reminder time set and it hasn't passed yet, don't show
      if (reminderTime && now < reminderTime) {
        return;
      }
      
      // Show popup 5 seconds after page load/refresh (only once per session)
      if (!hasShownInitial) {
        setTimeout(() => {
          setIsOpen(true);
          setHasShownInitial(true);
        }, 5000); // 5 second delay
      }
    };

    // Check immediately
    checkPopupStatus();

    // Set up interval to check reminder time
    const interval = setInterval(() => {
      if (reminderTime && Date.now() >= reminderTime) {
        setReminderTime(null);
        setIsOpen(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [reminderTime, hasShownInitial]);

  const closePopup = () => {
    setIsOpen(false);
  };

  const remindLater = () => {
    // Set reminder for 5 minutes from now
    const fiveMinutesFromNow = Date.now() + (5 * 60 * 1000);
    setReminderTime(fiveMinutesFromNow);
    setIsOpen(false);
  };

  return {
    isOpen,
    closePopup,
    remindLater
  };
}
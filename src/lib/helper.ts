

  const convertTimeToMinutes = (timeString: string) => {
    const [hours, minutes, seconds] = timeString.split(":").map(Number);
    return hours * 60 + minutes + seconds / 60;
  };

  export const sortDataByTrackedTime = (
      sortedData: any[],
      setSortedData: Function,
      setSortOrder: Function,
      ascending: boolean
    ) => {
      const newData = [...sortedData].sort((a, b) => {
        const timeA = convertTimeToMinutes(a.tracked_time);
        const timeB = convertTimeToMinutes(b.tracked_time);
        return ascending ? timeA - timeB : timeB - timeA;
      });
      setSortedData(newData);
      setSortOrder(ascending ? "asc" : "desc");
  };
  
  export const sortingDataByTime = (
    sortKey:string,
    sortedData: any[],
    setSortedData: Function,
    setSortOrder: Function,
    ascending: boolean
  ) => {
    const newData = [...sortedData].sort((a: any, b: any) => {
      const valueA = new Date(a[sortKey]).getTime();
      const valueB = new Date(b[sortKey]).getTime();
      return ascending ? valueA - valueB : valueB - valueA;
    });
  
    setSortedData(newData);
    setSortOrder(ascending ? "asc" : "desc");
  };

  export  const formatData = (item: string) => {

    // return dataToRender.map((item) => {
    // Split tracked_time to get hours, minutes, and seconds
    const [hours, minutes, seconds] = item
      .split(":")
      .map((part: string) => parseInt(part));

    // Convert hours and minutes to total minutes
    const totalMinutes = hours * 60 + minutes;

    // Set tracked_time_icon based on total minutes
    let trackedTimeIcon = null;
    switch (true) {
      case totalMinutes <= 19:
        trackedTimeIcon = "greyClock";
        break;
      case totalMinutes >= 20 && totalMinutes <= 39:
        trackedTimeIcon = "blackClock";
        break;
      case totalMinutes >= 40 && totalMinutes <= 59:
        trackedTimeIcon = "yellowClock";
        break;
      default:
        trackedTimeIcon = "redClock";
    }
    
    const voiceMailIcon = totalMinutes > 0 ? "phone" : "voicemail";

    // Return the modified object
    return {
      tracked_time_icon: trackedTimeIcon,
      last_call_icons: voiceMailIcon,
    };
//   });
  }

  export const getNotificationRelativeTime = (timestamp: string | number | Date) => {

    if (!timestamp) return "";

    const now = Date.now();
    const diff = now - new Date(timestamp).getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    switch (true) {
      case days > 7:
        return new Date(timestamp).toLocaleDateString(undefined, {
          month: "short",
          day: "numeric",
        });
      case days === 7:
        return `1 week ago`;
      case days >= 2 && days <= 7:
        return `${days} days ago`;
      case days === 1:
        return `1 day ago`;
      case hours >= 1 && hours <= 23:
        return `${hours} hours ago`;
      case hours === 0 && minutes > 1 && minutes <= 59:
        return `${minutes} minutes ago`;
      case hours === 0 && minutes === 1:
        return "a minute ago";
      case seconds <= 10:
        return "Within the last few seconds";
      default:
        return "just now";
    }
  };
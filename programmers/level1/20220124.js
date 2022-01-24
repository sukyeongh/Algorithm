function solution(id_list, report, k) {
  let reportObj = new Map();
  id_list.forEach((val) => {
    return (reportObj[val] = {
      report: [],
      reported: 0,
      isStoppedId: false,
    });
  });

  report.forEach((val) => {
    let [reportPerson, reportedPerson] = val.split(' ');

    if (reportObj[reportPerson].report.indexOf(reportedPerson) === -1) {
      reportObj[reportPerson].report.push(reportedPerson);
      reportObj[reportedPerson].reported += 1;
    }
  });

  id_list.forEach((val) => {
    if (reportObj[val].reported >= k) {
      reportObj[val].isStoppedId = true;
    }
  });

  let cntOfSendMail = id_list.map((val) => {
    return reportObj[val].report.filter((reportId) => reportObj[reportId].isStoppedId).length;
  });

  return cntOfSendMail;
}

console.log(
  solution(
    ['muzi', 'frodo', 'apeach', 'neo'],
    ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'],
    2
  )
);

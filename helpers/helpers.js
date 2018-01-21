export const cleanText = text => text.replace(/("([^"]|"")*")/g, '')
                                     .replace(/[(,.)\-+"'@$!$%^&*|/\\]/g, '')
                                     .replace(/\s\s+/, ' ');

export const arrayGroupBy = (array, prop) => {
  const groups = [];
  array.forEach(item => {
    const itemGroup = groups.find(group => group && group.title === item[prop]);

    if (itemGroup) {
      itemGroup.items.push(item);
    } else {
      groups.push({
        title: item[prop],
        items: [item]
      });
    }
  });

  const sorted = groups.sort((a, b) => {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });

  return sorted;
};

export const formatMoney = (number, currency) => `${number.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')} ${currency}`;

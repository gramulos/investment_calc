export const cleanText = text => text.replace(/("([^"]|"")*")/g, '')
                                     .replace(/[(,.)\-+"'@$!$%^&*|/\\]/g, '')
                                     .replace(/\s\s+/, ' ');

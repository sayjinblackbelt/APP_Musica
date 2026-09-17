/* APP MÚSICA — PRODUCT CONFIGURATION
   Transitional boundary between the static MVP and the future API.
   Keep domain constants here; runtime persistence remains simulated for now.
*/
window.APP_MUSICA_CONFIG = Object.freeze({
  appName: 'APP Música',
  version: 'mvp-1',
  lessonDurationMinutes: 45,
  trialDays: 7,
  subscriptionMonths: 3,
  liveLessonsPerMonth: 1,
  roles: Object.freeze(['student','teacher','admin']),
  tracks: Object.freeze([
    Object.freeze({ id:'violao', name:'Violão', type:'instrument' }),
    Object.freeze({ id:'ukulele', name:'Ukulele', type:'instrument' }),
    Object.freeze({ id:'linguagem-musical', name:'Linguagem Musical', type:'language', modules:['ritmica','solfejo'] })
  ]),
  storageKeys: Object.freeze({
    trial: 'appMusicaTrial',
    subscription: 'appMusicaSubscription',
    booking: 'appMusicaBooking',
    availability: 'appMusicaMultiProfessor',
    selectedTrack: 'appMusicaSelectedTrack'
  }),
  states: Object.freeze({
    booking: Object.freeze(['reserved','completed','cancelled']),
    subscription: Object.freeze(['pending','active','paused','cancelled','expired']),
    availability: Object.freeze(['available','reserved','blocked'])
  })
});

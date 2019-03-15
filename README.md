# visavis-mobile

## vis-a-vis mobile app proof of concept

### WORKING
1. Home Screen
2. Log In Auth
3. Create Account
4. Home Screen displaying current active match
5. Chat screen with message sending via http POST
6. Past matches screen displaying past matches in card

### NOT WORKING
1. Button to see chat history on past matches
2. Home Screen when there is no active current match

### WHAT MORE CAN BE DONE
1. Refactor usage of Redux actions.
2. Currently server is made to send user data along with authentication. Would be nice to separate that and fetch for user data from screens that need it.
3. Above will allow removal of certain actions from Redux dispatch to bring into the component that needs it, allowing for better control of component display without polluting Redux store.
4. Websocket for live chatting.
5. Additional features present in web version 

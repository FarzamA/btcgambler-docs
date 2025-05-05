# 🔍 Features

---

## 🔐 Authentication

BTCGambler provides a secure and seamless authentication system with support for:

??? o-auth "OAuth login via Google, Facebook, or Github"
    <div style="display: flex; justify-content: center; margin: 1.5rem 0;">
        <video 
            src="./../media/mp4/login_modal_btc.mp4" 
            autoplay 
            muted 
            playsinline 
            loop 
            style="max-width: 400px; border-radius: 12px;">
        </video>
    </div>

??? e-mail-registration "Email-based registration with background loading screen"  
    <div style="display: flex; justify-content: center; margin: 1.5rem 0;">
        <video 
            src="./../media/mp4/email_signup_btc.mp4" 
            autoplay 
            muted 
            playsinline 
            loop 
            style="max-width: 100%; border-radius: 12px;">
        </video>
    </div>

??? e-mail-verification "Email verification for user to be activated "  
    <div style="display: flex; justify-content: center; margin: 1.5rem 0;">
        <video 
            src="./../media/mp4/email_verification_btc.mp4" 
            autoplay 
            muted 
            playsinline 
            loop 
            style="max-width: 100%; border-radius: 12px;">
        </video>
    </div>

??? user-login "Username based login"  
    <div style="display: flex; justify-content: center; margin: 1.5rem 0;">
        <video 
            src="./../media/mp4/username_login_btc.mp4" 
            autoplay 
            muted 
            playsinline 
            loop 
            style="max-width: 100%; border-radius: 12px;">
        </video>
    </div>

??? qr-code "Two-Factor Authentication (2FA) for enhanced security (optional)"  
    <div style="display: flex; justify-content: center; margin: 1.5rem 0;">
        <video 
            src="./../media/mp4/2fa_setup_btc.mp4" 
            autoplay 
            muted 
            playsinline 
            loop 
            style="max-width: 100%; border-radius: 12px;">
        </video>
    </div>

??? e-mail-verification "Email-based password reset"  
    <div style="display: flex; justify-content: center; margin: 1.5rem 0;">
        <video 
            src="./../media/mp4/forgot_pass_btc.mp4" 
            autoplay 
            muted 
            playsinline 
            loop 
            style="max-width: 100%; border-radius: 12px;">
        </video>
    </div>

---

## 🎮 How It Works

- The game starts at a 1.00x multiplier.
- The multiplier increases in real time.
- A randomly determined "crash point" is hidden from the user.
- If the user cashes out before the crash, they win their bet multiplied by the current multiplier.
- If they wait too long, the game crashes and they lose their bet.

??? chart-line "Gameplay Demo"
    <div style="display: flex; justify-content: center; margin: 1.5rem 0;">
        <video 
            src="./../media/mp4/crash_gameplay_demo.mp4" 
            autoplay 
            muted 
            playsinline 
            loop 
            style="max-width: 100%; border-radius: 12px;">
        </video>
    </div>

---

## 👤 Guest User Functionality

BTCGambler supports guest login for users who wish to explore without creating an account:

- Guests can interact with the crash game temporarily, without registration
- All guest-related data (e.g. bets, chat messages) is deleted upon logout or session expiration
- Guests cannot access the Bitcoin faucet, make deposits/withdrawals, or edit profiles
- Automatic cleanup — The system ensures full cleanup of guest activity to maintain a clean state

---

## 🏠 Main Application View

After logging in, users land on the game dashboard — a real-time interface for placing bets and chatting with others.

??? sun-moon "Sleek dark-blue theme mode enabled by default, with an optional ultra dark mode for visual flexibility"
    <div style="display: flex; justify-content: center; margin: 1.5rem 0;">
        <video 
            src="./../media/mp4/dark_mode_demo_btc.mp4" 
            autoplay 
            muted 
            playsinline 
            loop 
            style="max-width: 100%; border-radius: 12px;">
        </video>
    </div>

??? message-circle-more "Live chat feature to interact with users while playing the game"
    <div style="display: flex; justify-content: center; margin: 1.5rem 0;">
        <video 
            src="./../media/mp4/live_chat_demo.mp4" 
            autoplay 
            muted 
            playsinline 
            loop 
            style="max-width: 400px; border-radius: 12px;">
        </video>
    </div>

---

## 🛡️ Edge Case Handling

- Late joins are blocked after a set threshold
- Disconnections auto-cashout at last known multiplier
- Crash randomness is provably fair (e.g., hash-based)

---

<!-- - **Real-Time Game Loop**: Crash multiplier tracked live with WebSockets.
- **WebSocket Engine**: Automatically pauses/resumes when users join or leave.
- **Secure Wallet System**: Built on Bitcoin Core with strict UTXO control.
- **Net Transactions**: Combine payouts to reduce fees.
- **Frontend**: React + Material UI with chart, chat, and betting panel.
- **Authentication**: OAuth (Google, GitHub, Facebook) + 2FA.
- **Chat System**: Real-time user chat with live updates. -->


const { useEffect, useState } = React;
function RegisterForm() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCodeSent, setVerificationCodeSent] = useState(false);

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleSendVerificationCode = async () => {
        try {
            const response = await fetch('/api/send-verification-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ phoneNumber }),
            });
            
            if (response.ok) {
                setVerificationCodeSent(true);
                alert('验证码已发送');
            } else {
                alert('发送验证码失败，请重试');
            }
        } catch (error) {
            console.error('Error sending verification code:', error);
            alert('发送验证码失败，请重试');
        }
    };

    return (
        <div className="phone">
            <input 
                type="tel" 
                value={phoneNumber} 
                onChange={handlePhoneNumberChange} 
                placeholder="輸入手機號碼" 
                required 
            />
            <button 
                type="button" 
                className="code" 
                onClick={handleSendVerificationCode}
                disabled={verificationCodeSent}
            >
                取得驗證碼
            </button>
        </div>
    );
}



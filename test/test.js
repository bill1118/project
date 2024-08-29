const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 用于解析 JSON 请求体
app.use(bodyParser.json());

// 示例的 API 路径：POST /api/send-verification-code
app.post('/api/send-verification-code', (req, res) => {
    const { phoneNumber } = req.body;

    // 模拟发送验证码
    console.log(`Sending verification code to ${phoneNumber}`);
    
    // 实际操作中，你会调用短信网关或服务提供商的 API 来发送验证码
    // 例如：Twilio, Nexmo, 阿里云短信服务等

    // 假设发送成功
    res.status(200).send({ message: 'Verification code sent' });
});

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

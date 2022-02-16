"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.default = router;
router.get('/', (req, res) => {
    res.send("Hellow Hell");
});
//# sourceMappingURL=auth.js.map
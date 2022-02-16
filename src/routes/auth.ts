  import { Router } from "express";
  const router: Router = Router();

  
  export default router;
  router.get('/', (req, res) => {
    res.send("Hellow Hell")
  })
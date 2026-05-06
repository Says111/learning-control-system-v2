import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SchoolIcon from "@mui/icons-material/School";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

const ROLES = [
  { key: "stud", label: "Студент" },
  { key: "teacher", label: "Преподаватель" },
  { key: "admin", label: "Администратор" },
];

const styles = {
  box: {
    width: "40%",
    display: "flex",
    borderRadius: "30px",
    background: "#ffffff",
    p: "auto",
    border: "solid 1px  #ffffff",
    zIndex: 100,
    minWidth: "920px",
  },
  imageBox: {
    width: "50%",
    borderRadius: "0 30px 30px 0",
    overflow: "hidden",
  },
  fieldBox: {
    width: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    mx: 7,
    my: 7,
    gap: 7,
  },
  image: {
    height: "100%",
    width: "100%",
    display: "block",
    objectFit: "cover",
  },
  field: {
    width: "100%",
  },
};
const Auth = () => {
  const [role, setRole] = React.useState("admin");
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const navigate = useNavigate();
  const selectRole = (role: string) => {
    switch (role) {
      case "stud":
        setRole("stud");
        break;
      case "teacher":
        setRole("teacher");
        break;
      case "admin":
        setRole("admin");
        break;
    }
  };

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  const picture = React.useMemo(() => {
    return `src/assets/pictures/${role}${getRandomInt(2)}.png`;
  }, [role]);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLogin = e.target.value;
    setLogin(newLogin);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleSignIn = () => {
    navigate("/home");
  };

  return (
    <Box sx={styles.box}>
      <Box sx={styles.fieldBox}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 3,
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <SchoolIcon fontSize="large" color="primary" />
            <Typography variant="h4"> EduPortal</Typography>
          </Box>
          <Box>
            <Typography variant="h5">Добро пожаловать!</Typography>
            <Typography variant="subtitle1">
              Войдите в свою учетную запись
            </Typography>
          </Box>
          <TextField
            required
            sx={styles.field}
            label="Введите логин"
            onChange={handleLoginChange}
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Введите пароль
            </InputLabel>
            <OutlinedInput
              label="Введите пароль"
              onChange={handlePasswordChange}
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {showPassword ? (
                      <VisibilityOffIcon fontSize="small" />
                    ) : (
                      <VisibilityIcon fontSize="small" />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            ></OutlinedInput>
          </FormControl>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            borderBlockStart: "1px solid #c4bad6",
            py: 3,
          }}
        >
          <Typography variant="subtitle1">Выберите роль</Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            {ROLES.map(({ key, label }) => (
              <Button
                key={key}
                size="small"
                variant={role === key ? "contained" : "outlined"}
                onClick={() => setRole(key)}
                sx={{ px: 1, mx: 1 }}
              >
                {label}
              </Button>
            ))}
          </Box>
          <Button
            variant="outlined"
            sx={{ mt: 5 }}
            disabled={password === "" || login === ""}
            onClick={handleSignIn}
          >
            Войти
          </Button>
        </Box>
      </Box>
      <Box sx={styles.imageBox}>
        <img src={picture} style={styles.image} />
      </Box>
    </Box>
  );
};

export default Auth;

import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// Define um conjunto de tokens de cor para os modos claro e escuro
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        // Cores para o modo escuro
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#d0d1d5",
          200: "#a1a4ab",
          300: "#727681",
          400: "#1F2A40",
          500: "#141b2d",
          600: "#101624",
          700: "#0c101b",
          800: "#080b12",
          900: "#040509",
        },
        purpleAccent: {
          100: "#e4ccff",
          200: "#c999ff",
          300: "#af66ff",
          400: "#9433ff",
          500: "#7900ff",
          600: "#6100cc",
          700: "#490099",
          800: "#300066",
          900: "#180033",
        },
        redAccent: {
          100: "#f8dcdb",
          200: "#f1b9b7",
          300: "#e99592",
          400: "#e2726e",
          500: "#db4f4a",
          600: "#af3f3b",
          700: "#832f2c",
          800: "#58201e",
          900: "#2c100f",
        },
        blueAccent: {
          100: "#e1e2fe",
          200: "#c3c6fd",
          300: "#a4a9fc",
          400: "#868dfb",
          500: "#6870fa",
          600: "#535ac8",
          700: "#3e4396",
          800: "#2a2d64",
          900: "#151632",
        },
        greenAccent: {
          100: "#e0f7e9",
          200: "#b3ebc9",
          300: "#80dda7",
          400: "#4ddf86",
          500: "#1bd168",
          600: "#16a856",
          700: "#118045",
          800: "#0c5833",
          900: "#073022",
        },
      }
    : {
        // Cores para o modo claro
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#040509",
          200: "#080b12",
          300: "#0c101b",
          400: "#f2f0f0",
          500: "#141b2d",
          600: "#1F2A40",
          700: "#727681",
          800: "#a1a4ab",
          900: "#d0d1d5",
        },
        purpleAccent: {
          100: "#e4ccff",
          200: "#c999ff",
          300: "#af66ff",
          400: "#9433ff",
          500: "#7900ff",
          600: "#6100cc",
          700: "#490099",
          800: "#300066",
          900: "#180033",
        },
        redAccent: {
          100: "#2c100f",
          200: "#58201e",
          300: "#832f2c",
          400: "#af3f3b",
          500: "#db4f4a",
          600: "#e2726e",
          700: "#e99592",
          800: "#f1b9b7",
          900: "#f8dcdb",
        },
        blueAccent: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
        greenAccent: {
          100: "#e0f7e9",
          200: "#b3ebc9",
          300: "#80dda7",
          400: "#4ddf86",
          500: "#1bd168",
          600: "#16a856",
          700: "#118045",
          800: "#0c5833",
          900: "#073022",
        },
      }),
});

// Configurações do tema do Material-UI baseado no modo (claro ou escuro)
export const themeSettings = (mode) => {
  const colors = tokens(mode); // Obtém as cores baseadas no modo atual (claro ou escuro)
  return {
    palette: {
      mode: mode, // Define o modo do tema (claro ou escuro)
      ...(mode === "dark"
        ? {
            // Configurações da paleta para o modo escuro
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.purpleAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            // Configurações da paleta para o modo claro
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.purpleAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      // Configurações globais de tipografia
      fontFamily: ["Nunito Sans", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Nunito Sans", "sans-serif"].join(","),
        fontSize: 40,
      },
      // Outras definições de tipografia (h2, h3, etc.)
      h2: {
        fontFamily: ["Nunito Sans", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Nunito Sans", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Nunito Sanso", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Nunito Sans", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Nunito Sans", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// Criação do contexto para alternância do modo de cor
export const ColorModeContext = createContext({
  toggleColorMode: () => {}, // Função vazia padrão para alternância do modo
});

// Hook personalizado para usar e gerenciar o modo de cor
export const useMode = () => {
  const [mode, setMode] = useState("light"); // Estado inicial para o modo de cor

  const colorMode = useMemo(
    () => ({
      // Função para alternar entre modos claro e escuro
      toggleColorMode: () =>
        setMode((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    []
  );

  // Cria um tema com base nas configurações para o modo atual
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode]; // Retorna o tema e o objeto para alternância do modo
};

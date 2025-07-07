import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { Pages } from "./shared";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  topOfPage?: boolean;
  currentPage: Pages;
  scrollFun: (value: Pages) => void;
};

export default function NavBar({ topOfPage, currentPage, scrollFun }: Props) {
  const [showMbNav, setShowMbNav] = useState<boolean>(false);

  const toggleMobileNav = () => {
    setShowMbNav(!showMbNav);
  };

  const handleNavClick = (page: Pages) => {
    scrollFun(page);
    setShowMbNav(false); // Close mobile nav when clicking
  };

  const navItems = [
    { page: Pages.Home, label: "Home" },
    { page: Pages.AboutMe, label: "About" },
    { page: Pages.Works, label: "Work" },
    { page: Pages.Contact, label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          !topOfPage
            ? "bg-gray-900/90 backdrop-blur-lg border-b border-gray-800 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Brand */}
            <motion.div
              className="text-2xl font-bold text-white cursor-pointer hover:text-blue-400 transition-colors duration-300"
              onClick={() => handleNavClick(Pages.Home)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              KHANT<span className="text-blue-400 text-lg">.dev</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map(({ page, label }) => (
                <motion.button
                  key={page}
                  onClick={() => handleNavClick(page)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    currentPage === page
                      ? "text-blue-400 bg-blue-400/10"
                      : "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-blue-400 mr-1">#</span>
                  {label}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-blue-400 transition-colors duration-300 rounded-lg hover:bg-gray-800/50"
              onClick={toggleMobileNav}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <RxHamburgerMenu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {showMbNav && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileNav}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-gray-900/95 backdrop-blur-lg border-l border-gray-800 z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-800">
                  <div className="text-xl font-bold text-white">
                    KHANT<span className="text-blue-400">.dev</span>
                  </div>
                  <motion.button
                    onClick={toggleMobileNav}
                    className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-blue-400 transition-colors duration-300 rounded-lg hover:bg-gray-800/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <RxCross1 className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 flex flex-col justify-center px-6 space-y-2">
                  {navItems.map(({ page, label }, index) => (
                    <motion.button
                      key={page}
                      onClick={() => handleNavClick(page)}
                      className={`text-left p-4 text-xl font-medium rounded-lg transition-all duration-300 ${
                        currentPage === page
                          ? "text-blue-400 bg-blue-400/10 border-l-4 border-blue-400"
                          : "text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 hover:translate-x-2"
                      }`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-blue-400 mr-2">#</span>
                      {label}
                    </motion.button>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-gray-800">
                  <p className="text-gray-400 text-sm text-center">
                    Frontend Developer
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

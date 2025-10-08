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
    setShowMbNav(false);
  };

  const navItems = [
    { page: Pages.Home, label: "Home", number: "01" },
    { page: Pages.AboutMe, label: "About", number: "02" },
    { page: Pages.Works, label: "Work", number: "03" },
    { page: Pages.Contact, label: "Contact", number: "04" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          !topOfPage
            ? "backdrop-blur-xl bg-black/80 border-b border-cyan-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="flex justify-between items-center">
            {/* Brand */}
            <div
              className="flex items-center gap-3 group"
              onClick={() => handleNavClick(Pages.Home)}
            >
              <div className="w-10 h-10 rounded-full border border-cyan-500/40 flex items-center justify-center group-hover:border-cyan-500 group-hover:bg-cyan-500/10 transition-all">
                <span className="text-cyan-400 font-bold">K</span>
              </div>
              <span className="text-white font-bold text-lg">
                KHANT<span className="text-cyan-400">.dev</span>
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map(({ page, label, number }) => (
                <button
                  key={page}
                  onClick={() => handleNavClick(page)}
                  className={`group px-6 py-3 rounded-full transition-all ${
                    currentPage === page
                      ? "bg-cyan-500/10 text-white border border-cyan-500/30"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="text-cyan-400 text-xs font-mono mr-2">
                    {number}.
                  </span>
                  <span className="font-medium">{label}</span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden w-10 h-10 rounded-full border border-cyan-500/40 flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-500/10 transition-all"
              onClick={toggleMobileNav}
            >
              <RxHamburgerMenu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {showMbNav && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileNav}
            />

            {/* Mobile Menu */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-black border-l border-cyan-500/10 z-50 md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex justify-between items-center p-6 border-b border-cyan-500/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-cyan-500/40 flex items-center justify-center">
                      <span className="text-cyan-400 font-bold">K</span>
                    </div>
                    <span className="text-white font-bold">
                      KHANT<span className="text-cyan-400">.dev</span>
                    </span>
                  </div>
                  <button
                    onClick={toggleMobileNav}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <RxCross1 className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 flex flex-col justify-center px-6 space-y-2">
                  {navItems.map(({ page, label, number }, index) => (
                    <motion.button
                      key={page}
                      onClick={() => handleNavClick(page)}
                      className={`text-left p-5 rounded-2xl transition-all ${
                        currentPage === page
                          ? "bg-cyan-500/10 text-white border border-cyan-500/30"
                          : "text-gray-400 hover:text-white"
                      }`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="text-cyan-400 text-xs font-mono mr-3">
                        {number}.
                      </span>
                      <span className="text-lg font-semibold">{label}</span>
                    </motion.button>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-cyan-500/10">
                  <p className="text-gray-500 text-sm">Frontend Developer</p>
                  <p className="text-gray-600 text-xs mt-1">
                    Bangkok, Thailand
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
